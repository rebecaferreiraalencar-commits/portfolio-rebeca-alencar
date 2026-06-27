/* =====================================================================
   PORTFÓLIO — Rebeca Ferreira de Alencar
   JavaScript puro (sem frameworks/bibliotecas), conforme exigido.

   Funcionalidades implementadas:
   1. Tema claro/escuro com memória da escolha (localStorage)
   2. Menu responsivo (abre/fecha em telas pequenas)
   3. Destaque do link ativo no menu conforme a rolagem da página
   4. Animação de revelação de elementos ao rolar a página
   5. Validação do formulário de contato + simulação de envio
   ===================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* -----------------------------------------------------------------
     1. TEMA CLARO / ESCURO
     Lê a preferência salva no navegador (ou o tema do sistema) e
     permite alternar manualmente clicando no botão.
  ------------------------------------------------------------------ */
  const htmlEl = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector(".theme-icon");

  function aplicarTema(tema) {
    htmlEl.setAttribute("data-theme", tema);
    themeIcon.textContent = tema === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute("aria-pressed", tema === "dark" ? "true" : "false");
    themeToggle.setAttribute(
      "aria-label",
      tema === "dark" ? "Alternar para tema claro" : "Alternar para tema escuro"
    );
  }

  // Verifica se já existe uma preferência salva; caso contrário, usa a do sistema
  const temaSalvo = localStorage.getItem("tema-portfolio");
  const prefereDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  aplicarTema(temaSalvo || (prefereDark ? "dark" : "light"));

  themeToggle.addEventListener("click", function () {
    const temaAtual = htmlEl.getAttribute("data-theme");
    const novoTema = temaAtual === "dark" ? "light" : "dark";
    aplicarTema(novoTema);
    localStorage.setItem("tema-portfolio", novoTema);
  });

  /* -----------------------------------------------------------------
     2. MENU RESPONSIVO (mobile)
  ------------------------------------------------------------------ */
  const navToggle = document.getElementById("navToggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav-link");

  function fecharMenu() {
    navToggle.classList.remove("open");
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  navToggle.addEventListener("click", function () {
    const aberto = nav.classList.toggle("open");
    navToggle.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  // Fecha o menu automaticamente ao clicar em algum link (útil no celular)
  navLinks.forEach(function (link) {
    link.addEventListener("click", fecharMenu);
  });

  /* -----------------------------------------------------------------
     3. DESTACAR O LINK ATIVO CONFORME A SEÇÃO VISÍVEL NA TELA
  ------------------------------------------------------------------ */
  const secoes = document.querySelectorAll("main section[id]");

  const observerNav = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "active",
              link.dataset.section === entrada.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" } // considera "ativa" a seção perto do meio da tela
  );

  secoes.forEach(function (secao) {
    observerNav.observe(secao);
  });

  /* -----------------------------------------------------------------
     4. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA
  ------------------------------------------------------------------ */
  const elementosReveal = document.querySelectorAll(".reveal");

  const observerReveal = new IntersectionObserver(
    function (entradas, observer) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target); // anima uma única vez
        }
      });
    },
    { threshold: 0.15 }
  );

  elementosReveal.forEach(function (el) {
    observerReveal.observe(el);
  });

  /* -----------------------------------------------------------------
     5. VALIDAÇÃO DO FORMULÁRIO DE CONTATO + ENVIO SIMULADO
  ------------------------------------------------------------------ */
  const form = document.getElementById("contactForm");
  const toast = document.getElementById("toast");

  const campoNome = document.getElementById("nome");
  const campoEmail = document.getElementById("email");
  const campoMensagem = document.getElementById("mensagem");

  // Expressão regular simples para validar o formato do e-mail (ex: usuario@dominio.com)
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function mostrarErro(campo, mensagem) {
    const grupo = campo.closest(".form-field");
    grupo.classList.add("invalid");
    grupo.querySelector(".error-message").textContent = mensagem;
  }

  function limparErro(campo) {
    const grupo = campo.closest(".form-field");
    grupo.classList.remove("invalid");
    grupo.querySelector(".error-message").textContent = "";
  }

  function mostrarToast(mensagem) {
    toast.textContent = mensagem;
    toast.classList.add("show");
    setTimeout(function () {
      toast.classList.remove("show");
    }, 3500);
  }

  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // impede o envio real, já que é uma simulação

    let formularioValido = true;

    // Verifica se o nome foi preenchido
    if (campoNome.value.trim() === "") {
      mostrarErro(campoNome, "Por favor, digite seu nome.");
      formularioValido = false;
    } else {
      limparErro(campoNome);
    }

    // Verifica se o e-mail foi preenchido e se possui formato válido
    if (campoEmail.value.trim() === "") {
      mostrarErro(campoEmail, "Por favor, digite seu e-mail.");
      formularioValido = false;
    } else if (!regexEmail.test(campoEmail.value.trim())) {
      mostrarErro(campoEmail, "Digite um e-mail válido (ex: usuario@dominio.com).");
      formularioValido = false;
    } else {
      limparErro(campoEmail);
    }

    // Verifica se a mensagem foi preenchida
    if (campoMensagem.value.trim() === "") {
      mostrarErro(campoMensagem, "Por favor, escreva uma mensagem.");
      formularioValido = false;
    } else {
      limparErro(campoMensagem);
    }

    if (!formularioValido) {
      return; // interrompe o envio se algum campo estiver inválido
    }

    // Simulação do envio: limpa o formulário e exibe a mensagem de confirmação
    form.reset();
    mostrarToast("Mensagem enviada com sucesso! 💗");
  });

  /* -----------------------------------------------------------------
     Atualiza automaticamente o ano exibido no rodapé
  ------------------------------------------------------------------ */
  document.getElementById("anoAtual").textContent = new Date().getFullYear();

});
