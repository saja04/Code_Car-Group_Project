import style from "./questions.module.css";

function Questions() {
  return (
    <div className={style.container}>
      <h3>Preguntas frecuentes</h3>
      <h4>¿Qué métodos de pago aceptan? </h4>
      <p>De momento, aceptamos pagos por Mercado Pago y en efectivo.</p>
      <h4>¿Ofrecen garantía o servicio postventa?</h4>
      <p>Solo ofrecemos garantía sobre autos 0km por fallas de fábrica.</p>
      <h4>¿Qué marcas y modelos de autos tienen disponibles?</h4>
      <p>
        Trabajamos con grandes marcas de autos como Ford, Volkswagen, Renault,
        Toyota, Kia y Chevrolet.
      </p>
      <h4>¿Realmente aceptan Mercado Pago?</h4>
      <p>Si.</p>
    </div>
  );
}

export default Questions;
