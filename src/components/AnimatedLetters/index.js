import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((letter, id) => (
        <span key={letter + id} className={`${letterClass} _${id + idx}`}>
          {letter}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters;
