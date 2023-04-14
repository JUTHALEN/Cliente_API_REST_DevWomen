function loadBootcampers() {
    const username = "judith@gmail.com";
    const password = "123456";
    const authHeaderValue = "Basic " + btoa(username + ":" + password);
  
    fetch("http://localhost:8080/bootcampers", {
      headers: {
        "Authorization": authHeaderValue
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener Bootcampers");
        }
        return response.json();
      })
      .then((bootcampers) => {
        const tbody = document.querySelector("#bootcamper-list tbody");
        tbody.innerHTML = "";
        bootcampers.forEach((bootcamper) => {
          const row = document.createElement("tr");
          const nombre = document.createElement("td");
          const primerApellido = document.createElement("td");
          const segundoApellido = document.createElement("td");
          const formacion = document.createElement("td");
          const foto = document.createElement("td");
          const fechaAlta = document.createElement("td");
          const bootcamp = document.createElement("td");
            bootcamp.textContent = bootcamper.bootcamp.nombre;
            bootcamp.classList.add("bootcamp-cell");
            row.appendChild(bootcamp);

  
          nombre.textContent = bootcamper.nombre;
          primerApellido.textContent = bootcamper.primerApellido;
          segundoApellido.textContent = bootcamper.segundoApellido;
          formacion.textContent = bootcamper.formacion;
          fechaAlta.textContent =new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(bootcamper.fechaAlta));
          bootcamp.textContent = bootcamper.bootcamp.nombre;
  
          // Añadir la imagen de la foto
          const img = document.createElement("img");
          img.src = "http://localhost:8080/bootcampers/downloadFile/" + bootcampers.foto;
          img.alt = "Foto de " + bootcamper.nombre;
          foto.appendChild(img);
  
          row.appendChild(nombre);
          row.appendChild(primerApellido);
          row.appendChild(segundoApellido);
          row.appendChild(formacion);
          row.appendChild(foto);
          row.appendChild(fechaAlta);
          row.appendChild(bootcamp);
          tbody.appendChild(row);
        });
      })
      .catch((error) => {
        console.error("Error al obtener Bootcampers:", error);
      });
  }
  
  // Llamar a la función para cargar los bootcampers al cargar la página
  window.addEventListener("load", loadBootcampers);
  
  fetch("http://localhost:8080/bootcampers/downloadFile", {
      headers: {
        "Authorization": authHeaderValue
  }});

      
  