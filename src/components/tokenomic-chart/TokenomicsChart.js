import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useEffect } from 'react';

const TokenomicsChart = () => {
  useEffect(() => {
    am4core.useTheme(am4themes_animated);

    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.background.fill = am4core.color(); // dark background

    chart.legend = new am4charts.Legend();
    chart.legend.labels.template.fill = am4core.color("#FFFFFF"); // white legend labels
    chart.legend.valueLabels.template.fill = am4core.color("#FFFFFF"); // white legend values

    chart.data = [
      { category: "Token Sale - Private Sale", value: 200000000 },
      { category: "Token Sale - Public Sale", value: 800000000 },
      { category: "Team Allocation", value: 400000000 },
      { category: "Reserve Fund", value: 300000000 },
      { category: "Community Incentives", value: 100000000 },
      { category: "Ecosystem Development", value: 200000000 }
    ];

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "category";
    series.labels.template.fill = am4core.color("#FFFFFF"); // white labels

    series.slices.template.propertyFields.fill = "color";
    chart.data = chart.data.map((item, index) => {
      let colors = ["#fcc200", "#da9100", "#e6be8a", "#ffc30b", "#996515", "#cfb53b"];
      return { ...item, color: colors[index] };
    });

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv"></div>;
};

export default TokenomicsChart;
