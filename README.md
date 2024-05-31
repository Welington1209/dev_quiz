## Guia

- [Visão geral](#visão-geral)
  - [Funcionamento](#funcionamento)
  - [Aparência](#aparência)
  - [Links](#links)
- [Processo](#processo)
  - [Desenvolvido com](#desenvolvido-com)
  - [Aprendizado](#aprendizado)

## Visão geral

### Funcionamento

O usuário deve ser capaz de:

- Ter uma navegação intuitiva e fluida durante o quiz
- Ser capaz de utilizar as ajudas disponíveis
- Saber se a resposta selecionada está correta
- Saber exatamente o seu placar e o seu desempenho ao fim do quiz

### Aparência

![](/dev_quiz/src/assets/screen.gif)

### Links

- Live Site URL: https://welington1209.github.io/dev_quiz/

## Processo

### Desenvolvido com:

- Vite
- React
- Hooks do React
- Context Api

### Aprendizado

Com este projeto desenvolvido em aula aprendi de forma prática o uso da Context Api. Que seria a grosso modo uma forma de criar um contexto e armazenar os dados necessários, de forma que sempre que um componente precise de algum dado possa simplesmente consumir o contexto criado.

Contexto:

```jsx
import { createContext, useReducer } from "react";

const STAGES = ["Start", "Category", "Playing", "End"];

const InitialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false,
  optiontoHide: null,
};
```

Componente de exemplo:

```jsx
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const [quizState, dispatch] = useContext(QuizContext);
```
