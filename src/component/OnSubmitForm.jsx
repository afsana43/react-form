
const OnSubmitForm = () => {

    const eventHandler = e =>{
         e.preventDefault();
        console.log('form clicked');
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        
    }

  return (
    <div>
      <form onSubmit={eventHandler}>
        <input type="text" name="name" /> <br />
        <input type="text" name="email" /> <br />
        <input type="password" name="password" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default OnSubmitForm;