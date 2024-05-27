import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Beginner from "../img/medal-medal-svgrepo-com.svg";
import Middle from "../img/medal-medal-svgrepo-com (1).svg";
import Pro from "../img/badge-medal-svgrepo-com.svg";
import Expert from "../img/badge-medal-svgrepo-com (1).svg";

import "./GameOver.css";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const quizScore = quizState.score * 6;

  return (
    <div id="gameover">
      <h2>Fim de jogo</h2>
      <p>Pontuação: {quizScore} </p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{" "}
        perguntas.
      </p>

      {quizScore >= 0 && quizScore < 10 && (
        <>
          <h2>Precisa melhorar!</h2>
          <img src={Beginner} alt="Fim do quiz. Pequena medalha" />
        </>
      )}

      {quizScore > 10 && quizScore < 15 && (
        <>
          <h2>Bom!</h2>
          <img src={Middle} alt="Fim do quiz. Medlha de broze" />
        </>
      )}

      {quizScore > 15 && quizScore < 25 && (
            <>
              <h2>Ótimo</h2>
              <img src={Pro} alt="Fim do quiz. Medlha de prata" />
            </>
          )}

      {quizScore >= 25 && (
        <>
          <h2>Perfeito!</h2>
          <img src={Expert} alt="Fim do quiz. Medlha de ouro" />
        </>
      )}

      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
};

export default GameOver;
