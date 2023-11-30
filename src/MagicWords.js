import './MagicWords.css'

export default function MagicWords({answerPhrase,hiddenPhrase}) {
    return (
      <div className='magic-words'>
        <p>{answerPhrase}</p>
        <p>{hiddenPhrase}</p>
      </div>);
  }