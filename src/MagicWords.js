import './css/MagicWords.css'

export default function MagicWords({answerPhrase,hiddenPhrase}) {
    return (
      <div className='magic-words'>
        <p>Magic Words:</p>
        <p>{answerPhrase}</p>
        <p>{hiddenPhrase}</p>
      </div>);
  }