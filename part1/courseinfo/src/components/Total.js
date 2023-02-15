const Total = (props) => {
    const boldFont = {
      fontWeight: 'bold'
    }
  
const total = props.course.parts.reduce((total,exercise) => {
    return total + (exercise.exercises);
    }, 0);
     
    return (
      <div>
        <p style={boldFont}> Total of {total} exercises </p>
      </div>
    )
}

export default Total