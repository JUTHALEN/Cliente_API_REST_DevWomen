function loadBootcamps() {
  const username = "judith@gmail.com";
  const password = "123456"; 
  const authHeaderValue = "Basic " + btoa(username + ":" + password);

  fetch("http://localhost:8080/bootcamps", {
    headers: {
      "Authorization": authHeaderValue
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener Bootcamps");
      }
      return response.json();
    })
    .then((bootcamps) => {
      const bootcampListElement = document.getElementById("bootcamp-list");
      bootcamps.forEach((bootcamp) => {
        const bootcampElement = createBootcampElement(bootcamp);
        bootcampListElement.appendChild(bootcampElement);
      });
    })
    .catch((error) => {
      console.error("Error al obtener Bootcamps:", error);
    });
}

loadBootcamps();

function createBootcampElement(bootcamp) {
  const bootcampElement = document.createElement('div');
  bootcampElement.className = 'bootcamp';

  const bootcampName = document.createElement('h2');
  bootcampName.textContent = bootcamp.nombre;
  bootcampElement.appendChild(bootcampName);

  bootcampElement.addEventListener('click', () => {
    const modal = document.getElementById('bootcamp-modal');
    document.getElementById('modal-bootcamp-name').innerText = bootcamp.nombre;
    document.getElementById('modal-bootcamp-description').innerText = bootcamp.descripcion;
    document.getElementById('modal-bootcamp-orientacion').innerText = 'Orientación: ' + bootcamp.orientacion;
    document.getElementById('modal-bootcamp-fechaInicio').innerText = 'Fecha de inicio: ' + bootcamp.fechaInicio;
    document.getElementById('modal-bootcamp-fechaFin').innerText = 'Fecha de finalización: ' + bootcamp.fechaFin;
    document.getElementById('modal-bootcamp-language').innerText = 'Idioma: ' + bootcamp.language;
    
    modal.style.display = 'block';
  });

  return bootcampElement;
  
}

  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('bootcamp-modal').style.display = 'none';
    });

    const showBootcampersButton = document.getElementById('show-bootcampers-button');

    showBootcampersButton.addEventListener('click', () => {
      loadBootcampers();
    });


