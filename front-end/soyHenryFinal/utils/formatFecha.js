function formatFecha(dateString) {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("es-ES", options);
  
    return formatter.format(date);
  }

  export default formatFecha;