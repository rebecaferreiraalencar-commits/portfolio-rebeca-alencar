# Portfólio — Rebeca Ferreira de Alencar

Site pessoal (currículo online) desenvolvido em HTML5, CSS3 e JavaScript puro,
sem frameworks, para a atividade prática de Fundamentos da Programação Web.

## Estrutura dos arquivos

```
index.html              → página única, com as 4 seções (Sobre mim, Formação, Portfólio, Contato)
css/style.css            → estilos, incluindo tema claro e tema escuro
js/script.js             → menu responsivo, alternância de tema, validação do formulário etc.
assets/projetos/         → coloque aqui os arquivos dos seus trabalhos (veja LEIA-ME.md dentro da pasta)
assets/img/              → opcional: coloque aqui sua foto real, se quiser substituir o avatar
```

## Antes de publicar — pequenos ajustes que faltam

1. **Arquivos do portfólio**: já incluí os 4 trabalhos que você enviou dentro de
   `assets/projetos/` (o arquivo em Word foi convertido para PDF automaticamente).
   Se quiser trocar por versões mais novas, é só substituir o arquivo mantendo o
   mesmo nome.
2. **Foto (opcional)**: hoje o "avatar" é um círculo com as iniciais "RA". Se quiser
   usar sua foto de verdade, salve-a em `assets/img/foto.jpg` e, no `index.html`,
   troque o bloco:
   ```html
   <div class="avatar">
     <span class="avatar-initials">RA</span>
   </div>
   ```
   por:
   ```html
   <div class="avatar">
     <img src="assets/img/foto.jpg" alt="Foto de Rebeca Ferreira de Alencar" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">
   </div>
   ```
3. **Link do GitHub**: troque `https://github.com/SEU-USUARIO/SEU-REPOSITORIO` (aparece
   no rodapé e no card "Este portfólio") pelo link real do seu repositório, depois
   que você criá-lo.

## Como publicar no GitHub Pages

1. Crie uma conta no [GitHub](https://github.com) (se ainda não tiver).
2. Crie um repositório público. Como a atividade exige que o endereço do site
   contenha seu nome, sugestão de nome do repositório: `portfolio-rebeca-alencar`.
3. Suba todos os arquivos desta pasta para o repositório (pode arrastar e soltar
   pelo site do GitHub, em "Add file → Upload files", ou usar o Git pelo terminal).
4. No repositório, vá em **Settings → Pages**.
5. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Clique em **Save**.
6. Após alguns minutos, o site estará disponível em algo como:
   `https://SEU-USUARIO.github.io/portfolio-rebeca-alencar/`

## Checklist da atividade

- [x] HTML5, CSS3 e JavaScript puro (sem frameworks)
- [x] 4 seções: Sobre mim, Formação, Portfólio, Contato
- [x] Navegação por âncoras com menu visível em toda a página
- [x] Formulário de contato com validação (campos obrigatórios + formato de e-mail)
- [x] Simulação de envio com limpeza dos campos e mensagem de confirmação
- [x] Menu responsivo (abre/fecha em telas pequenas)
- [x] Alternância de tema claro/escuro
- [x] Código comentado
- [x] Arquivos reais do portfólio incluídos em `assets/projetos/`
- [ ] Publicar no GitHub Pages com endereço contendo seu nome
- [ ] Tirar prints de cada seção no navegador (com a URL publicada visível) para o documento de entrega
