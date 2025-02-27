//--------------Grafico de oxigeno-----------------
const ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Hoy"],
  datasets: [
    {
      label: "Valores",
      data: [1.5, 1.2, 1.8, 1.3, 1.6, 2.0], // Aquí se actualizarán los datos
      backgroundColor: "rgba(0, 255, 255, 0.8)", // Color de las barras
      borderWidth: 0,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y", // Esto hace que las barras sean horizontales
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: "white" }, // Color de los números del eje X
      },
      y: {
        ticks: { color: "white" }, // Color de las etiquetas del eje Y
      },
    },
    plugins: {
      legend: { display: false }, // Oculta la leyenda
    },
  },
};

const myChart = new Chart(ctx, config);

//--------------------Grafico co2--------------
const ctx2 = document.getElementById("myChart2").getContext("2d");

const data2 = {
  labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Hoy"],
  datasets: [
    {
      label: "Valores",
      data: [0.0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4], // Aquí se actualizarán los datos
      backgroundColor: "rgba(0, 255, 255, 0.8)", // Color de las barras
      borderWidth: 0,
    },
  ],
};

const config2 = {
  type: "bar",
  data: data2,
  options: {
    indexAxis: "y", // Esto hace que las barras sean horizontales
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: "white" }, // Color de los números del eje X
      },
      y: {
        ticks: { color: "white" }, // Color de las etiquetas del eje Y
      },
    },
    plugins: {
      legend: { display: false }, // Oculta la leyenda
    },
  },
};

const myChart2 = new Chart(ctx2, config2);


//----------------grafico 3 pastel-------------------------
const ctx3 = document.getElementById("chart4").getContext("2d"); 

 

const miGrafico = new Chart(ctx3, { 

  type: "pie", // Gráfico de pastel 

  data: { 

    labels: ["biodiversidad", "deforestación", "Manglares", "Aire"], 

    datasets: [ 

      { 

        data: [5.3, 20.3, 37.2, 37.2], // Valores de cada sección 

        backgroundColor: ["#60ª5FA", "#0F172A", "#14B8A6", "#0284C7"], // Colores 

        borderColor: "#ffffff", 

        borderWidth: 2, 

      }, 

    ], 

  }, 

  options: { 

    responsive: true, 

    plugins: { 

      legend: { 

        Display: false, // Oculta la leyenda predeterminada 

      }, 

      tooltip: { 

        enabled: true, // Muestra información al pasar el mouse 

      }, 

    }, 

  }, 

}); 