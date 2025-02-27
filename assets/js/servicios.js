//--------------Grafico de oxigeno-----------------
const ctx = document.getElementById("myChart").getContext("2d");

const data = {
  labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Hoy"],
  datasets: [
    {
      label: "Valores",
      data: [1.5, 1.2, 1.8, 1.3, 1.6, 2.0], // Aquí se actualizarán los datos
      backgroundColor: "rgba(0, 255, 255, 1)", // Color de las barras
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
      backgroundColor: "rgba(0, 255, 255, 1)", // Color de las barras
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

//----------------grafico 4 pastel-------------------------
const ctx3 = document.getElementById("chart3").getContext("2d");

const miGrafico1 = new Chart(ctx3, {
  type: "pie",

  data: {
    labels: ["biodiversidad", "deforestación", "Manglares", "Aire"],

    datasets: [
      {
        data: [14.3, 19, 33.3, 33.3],

        backgroundColor: ["#60A5FA", "#0F172A", "#14B8A6", "#0284C7"],

        borderColor: "#ffffff",

        borderWidth: 2,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        display: false, // Ocultar leyenda tradicional
      },

      tooltip: {
        enabled: true,
      },

      datalabels: {
        color: "#ffffff", // Color del texto

        font: {
          weight: "bold",

          size: 12,
        },

        formatter: (value, context) => {
          let label = context.chart.data.labels[context.dataIndex];

          return label + "\n" + value + "%"; // Formato de la etiqueta
        },

        anchor: "end", // Ubicación del texto

        align: "start",

        offset: -10, // Ajustar la posición de las etiquetas
      },
    },
  },
});

//----------------grafico 4 pastel-------------------------
const ctx4 = document.getElementById("chart4").getContext("2d");

const miGrafico = new Chart(ctx4, {
  type: "pie",

  data: {
    labels: ["biodiversidad", "deforestación", "Manglares", "Aire"],

    datasets: [
      {
        data: [5.3, 20.3, 37.2, 37.2],

        backgroundColor: ["#60A5FA", "#0F172A", "#14B8A6", "#0284C7"],

        borderColor: "#ffffff",

        borderWidth: 2,
      },
    ],
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        display: false, // Ocultar leyenda tradicional
      },

      tooltip: {
        enabled: true,
      },

      datalabels: {
        color: "#ffffff", // Color del texto

        font: {
          weight: "bold",

          size: 12,
        },

        formatter: (value, context) => {
          let label = context.chart.data.labels[context.dataIndex];

          return label + "\n" + value + "%"; // Formato de la etiqueta
        },

        anchor: "end", // Ubicación del texto

        align: "start",

        offset: -10, // Ajustar la posición de las etiquetas
      },
    },
  },
});
