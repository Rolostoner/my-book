const Book = ({ img, title, author, id }) => {
    // const { img, title, author} = props

    const clickHandler = (e) => {
        alert('Yoooo!');
        console.log(e);
        console.log(e.target.id);
    }
    const anotherExample = (author) => {
        console.log(author);
    }

return( 
    <div className="book" onMouseOver={() => {console.log('click')}}> 
        <img src={img} alt="" /> 
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button id={id} type="button" onClick={clickHandler}example></button>
        <button id={id} type="button" onClick={() => anotherExample(author)}>Another exmple</button>
    </div>
)
}

export default Book