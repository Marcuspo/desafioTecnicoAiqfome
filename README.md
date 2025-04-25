<p align="center">
  <img src="https://yt3.googleusercontent.com/IYyFqoDVnDdZ9uGG8yyTYzjcTE3D38hsUGuTNKWRYuyenCx89N4wX6mfeH0ZRYfMgxmrM-uihQ=s900-c-k-c0x00ffffff-no-rj" alt="ICON AIQFOME" width="300px" height="100px">
</p>

# Aiqfome desafio

Challenge provided by
([AiqFome](https://aiqfome.com/))
using the framework
[React native](https://reactnative.dev/)

Olá! Me chamo **Marcus Pontes** e este é o projeto desenvolvido como parte de um desafio técnico. Abaixo explico algumas decisões tomadas durante o desenvolvimento do app, bem como sua estrutura e funcionalidades.

## Desafio

- Criar uma interface onde pode ser listado itens e os itens podem ser adicionados em uma aba de favoritos e salvos localmente com asyncstorage.

## Imagens

<p>
  <img src="https://i.imgur.com/AQsXCoq.png" alt="Splashscreen" width="200" height="500">
  <img src="https://i.imgur.com/DFON1wH.png" alt="Tela principal" width="200" height="500">
  <img src="https://i.imgur.com/2rV0799.png" alt="Tela de favoritos" width="200" height="500">
  <img src="https://i.imgur.com/7M8iXDk.png" alt="Tela de detalhes" width="200" height="500">
</p>

---

## 🧠 Decisões Técnicas

- **💅 Emotion**  
  Optei por essa biblioteca por já ter familiaridade com `styled-components`, e o Emotion é bastante semelhante, além de ser amplamente utilizado na comunidade.

- **💾 AsyncStorage**  
  Utilizado para persistência de dados localmente. Considerei o uso do Realm, mas para o escopo do projeto, o AsyncStorage foi suficiente e mais leve.

- **🧭 React Navigation**  
  A biblioteca mais recomendada para navegação entre telas no React Native.

- **🌐 Axios**  
  Utilizado para requisições HTTP por sua simplicidade e popularidade.

- **🎨 Lucide React Native**  
  Escolhida para os ícones do app pela sua leveza e design moderno.

- **🖼️ React Native Fast Image**  
  Utilizada para exibição de imagens com melhor desempenho e caching nativo.

---

## 🗂️ Estrutura do Projeto

Organizei todo o código dentro da pasta `src/` com a seguinte estrutura:

```
src/
├── assets/
├── screens/
├── utils/
└── App.tsx
```

Essa estrutura facilita a organização, escalabilidade e manutenção do código.

---

## 🏠 Tela Home

- Realiza uma requisição com o **Axios** para buscar dados dos produtos.
- Armazena os dados em um state.
- Renderiza os produtos com uma **FlatList**, que é mais performática do que usar `ScrollView` ou `map`, como recomendado pela documentação oficial.
- Em caso de ausência de conexão, um componente `Offline` exibe uma mensagem ao usuário.
- Cada item é renderizado por um componente reutilizável: `RenderItem`.

---

## ❤️ Componente `RenderItem`

- Verifica se o item está favoritado através de um `useEffect` (linha 23) sempre que o componente é montado ou atualizado.
- A função da **linha 42** é responsável por adicionar ou remover o item da lista de favoritos no AsyncStorage.
- A função da **linha 75** lida com o clique no botão de favoritar, alternando o estado de favorito e atualizando a interface do usuário (coração vermelho/cinza).

---

## 🌟 Tela de Favoritos

- Utiliza `useFocusEffect` para carregar os itens favoritados sempre que o usuário acessa essa tela.
- Reutiliza o componente `RenderItem` para evitar duplicação de código.

---

## 📐 Responsividade

Na pasta `utils`, criei o arquivo `metrics.tsx` com as seguintes funções:

- `horizontalScale`: escala elementos proporcionalmente à largura da tela.
- `verticalScale`: escala elementos proporcionalmente à altura da tela.
- `moderateScale`: usado para definir tamanhos de fonte de maneira proporcional.

Essas funções ajudam a manter o app responsivo em diferentes dispositivos.

---

## 🚀 Technologies

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org)
- Emotion
- @react-native-async-storage/async-storage
- @react-native-community/netinfo
- Lucide
- react-native-svg
- React-navigation
- Axios
- react-native-fast-image

## 🤔 Getting started

1. Clone this repository.
2. Run `cd desafioTecnicoAiqfome`.
3. Run `yarn` or `npm install` to install dependencies.
4. Run `yarn android` or `yarn ios`

## ✅ Considerações Finais

Esse foi o projeto! Agradeço muito pela oportunidade de participar deste desafio. Estou totalmente aberto a **feedbacks** e dúvidas sobre qualquer parte do código ou decisões tomadas.

Muito obrigado!

- [Marcus Pontes](https://ayo.so/marcuspontes).
