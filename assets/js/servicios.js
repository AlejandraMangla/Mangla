const ctx = document.getElementById("myChart1").getContext("2d");

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
