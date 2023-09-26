import style from "./contact.module.css";

function Contact() {
  return (
    <div className={style.container}>
      <form>
        <label>
          Nombre:
          <input type="text" id="nombre" />
        </label>
        <label>
          Apellido:
          <input type="text" id="apellido" />
        </label>
        <label>
          Email:
          <input type="email" id="email" />
        </label>
        <label>
          Mensaje:
          <textarea id="message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
