# 🚀 IgniteFeed

Uma aplicação React moderna que simula uma rede social/feed de posts, desenvolvida com TypeScript e Vite. Demonstra conceitos fundamentais do React como componentes, estado, props e interatividade.

## ✨ Funcionalidades

- **📱 Feed de Posts** - Visualização de posts com autor, data e conteúdo
- **💬 Sistema de Comentários** - Adicionar e deletar comentários com sistema de likes
- **👤 Perfil Editável** - Modal para editar nome, cargo e avatar
- **🎨 Design Responsivo** - Interface adaptável para desktop e mobile
- **⌨️ Acessibilidade** - Suporte a navegação por teclado (ESC para fechar modais)

## 🛠️ Tecnologias

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **CSS Modules** - Estilização encapsulada
- **Phosphor React** - Ícones
- **date-fns** - Manipulação de datas

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/          # Cabeçalho com logo
│   ├── Sidebar/          # Perfil do usuário
│   ├── Post/             # Posts do feed
│   ├── Comment/          # Comentários
│   ├── Avatar/           # Avatar reutilizável
│   ├── Modal/            # Modal base reutilizável
│   └── EditProfileModal/ # Modal de edição de perfil
├── assets/               # Recursos estáticos
└── global.css           # Estilos globais
```

## 🎯 Pontos Fortes

- **Código Limpo** - Componentes bem organizados e reutilizáveis
- **TypeScript** - Interfaces bem definidas e tipagem completa
- **Design System** - Paleta de cores consistente e responsividade
- **Validação** - Formulários com validação em tempo real
- **UX/UI** - Interface intuitiva com feedback visual
- **Performance** - Componentes otimizados e re-renders mínimos

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview da build
- `npm run lint` - Verificação de código
