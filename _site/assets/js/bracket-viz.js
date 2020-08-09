function bracketViz({ el, data }) {
  const accessor = {
    name: (d) => d[data.columns[0]],
    quarterfinal: (d) => +d[data.columns[1]],
    semifinal: (d) => +d[data.columns[2]],
    final: (d) => +d[data.columns[3]],
    logo: (d) => d[data.columns[4]],
    color: (d) => d[data.columns[5]],
  };
  const cols = ["quarterfinal", "semifinal", "final", "win"];
  const n = data.length;
  const colWidth = 160;
  const colPadding = 20;
  const rowHeight = 24;
  const width = colWidth * cols.length + colPadding * (cols.length - 1);
  const height = rowHeight * (n + n / 2 - 1);
  const margin = {
    top: 60,
    right: 1,
    bottom: 1,
    left: 1,
  };
  const svgWidth = width + margin.left + margin.right;
  const svgHeight = height + margin.top + margin.bottom;
  const logoWidth = 120;
  const logoHeight = 50;
  const logoMargin = {
    x: 5,
    y: 10,
  };

  const pathWidth = d3.scaleLinear().domain([0, 1.6]).range([1, rowHeight]);
  const x = d3
    .scaleBand()
    .domain(cols)
    .range([0, width])
    .paddingInner(colPadding / colWidth);
  const xLink = (colIndex) => x(cols[colIndex]);
  const yRow = (rowIndex) =>
    (rowIndex + 1 / 2 + Math.floor(rowIndex / 2)) * rowHeight;
  const yLink = ([colIndex, rowIndex]) => {
    switch (colIndex) {
      case 0:
        return yRow(rowIndex);
      case 1:
        return rowIndex % 2
          ? (yRow(rowIndex - 1) + yRow(rowIndex)) / 2
          : (yRow(rowIndex) + yRow(rowIndex + 1)) / 2;
      case 2:
        return Math.floor(rowIndex / 4)
          ? (yRow(4) + yRow(7)) / 2
          : (yRow(0) + yRow(3)) / 2;
      case 3:
        return (yRow(0) + yRow(7)) / 2;
      default:
        break;
    }
  };
  const linkGenerator = ([colIndex, rowIndex], padding = 0) => {
    const path = d3.path();
    switch (colIndex) {
      case 0:
        path.moveTo(xLink(colIndex) + colWidth, yLink([colIndex, rowIndex]));
        path.lineTo(xLink(colIndex + 1), yLink([colIndex, rowIndex]));
        path.lineTo(xLink(colIndex + 1), yLink([colIndex + 1, rowIndex]));
        path.lineTo(
          xLink(colIndex + 2) + padding,
          yLink([colIndex + 1, rowIndex])
        );
        break;
      case 1:
        path.moveTo(xLink(colIndex + 1), yLink([colIndex, rowIndex]));
        path.lineTo(xLink(colIndex + 1), yLink([colIndex + 1, rowIndex]));
        path.lineTo(
          xLink(colIndex + 2) + padding,
          yLink([colIndex + 1, rowIndex])
        );
        break;
      case 2:
        path.moveTo(xLink(colIndex + 1), yLink([colIndex, rowIndex]));
        path.lineTo(xLink(colIndex + 1), yLink([colIndex + 1, rowIndex]));
        path.lineTo(
          xLink(colIndex + 1) + colWidth / 2,
          yLink([colIndex + 1, rowIndex])
        );
        break;
      default:
        break;
    }
    return path.toString();
  };

  const container = d3.select(el).classed("bracket-viz", true);
  const svg = container
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .on("mousemove", moved);
  const g = svg
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  g.append("g")
    .attr("transform", `translate(0,${-margin.top + 24})`)
    .attr("class", "round-labels")
    .call(d3.axisTop(x).tickSize(0).tickPadding(10));
  g.append("path")
    .attr("class", "link")
    .attr("d", () => {
      return d3
        .merge([
          d3.range(n).map((rowIndex) => [0, rowIndex]),
          d3
            .range(n)
            .filter((d) => d % 2 === 0)
            .map((rowIndex) => [1, rowIndex]),
          d3
            .range(n)
            .filter((d) => d % 4 === 0)
            .map((rowIndex) => [2, rowIndex]),
        ])
        .map((d) => linkGenerator(d))
        .join(" ");
    });
  const gHighlight = g.append("g").attr("class", "highlight");
  const node = g
    .append("g")
    .attr("class", "nodes")
    .selectAll(".node")
    .data(data)
    .join("g")
    .attr("class", "node")
    .attr("transform", (d, i) => `translate(0,${yRow(i)})`)
    .call((g) =>
      g
        .append("rect")
        .attr("x", 0)
        .attr("y", -rowHeight / 2)
        .attr("width", colWidth)
        .attr("height", rowHeight)
    )
    .call((g) =>
      g
        .append("text")
        .attr("x", 4)
        .attr("y", 0)
        .attr("dy", "0.32em")
        .text(accessor.name)
    );
  const gIcon = g
    .append("g")
    .attr(
      "transform",
      `translate(${xLink(cols.length - 1) + colWidth / 2},${height / 2})`
    );
  gIcon
    .append("rect")
    .attr("class", "icon-rect")
    .attr("rx", 5)
    .attr("x", -logoWidth / 2 - logoMargin.x)
    .attr("y", -logoHeight / 2 - logoMargin.y)
    .attr("width", logoWidth + logoMargin.x * 2)
    .attr("height", logoHeight + logoMargin.y * 2);
  const icon = gIcon
    .selectAll("image")
    .data(data.map(accessor.logo))
    .join("image")
    .attr("class", "icon-image")
    .attr("x", -logoWidth / 2)
    .attr("y", -logoHeight / 2)
    .attr("width", logoWidth)
    .attr("height", logoHeight)
    .attr("href", (d) => d);



  let highlightedRowIndex = d3.maxIndex(data, accessor.final);

  const ys = d3.range(n).map(yRow);

  highlight(highlightedRowIndex);

  function moved() {
    const pointY = d3.clientPoint(g.node(), d3.event)[1];
    const rowIndex = d3.leastIndex(ys, (a) => Math.abs(pointY - a));
    if (highlightedRowIndex !== rowIndex) {
      highlightedRowIndex = rowIndex;
      highlight(highlightedRowIndex);
    }
  }

  function highlight(rowIndex) {
    node.classed("highlighted", (d, i) => i === rowIndex);
    icon.classed("highlighted", (d, i) => i === rowIndex);
    gHighlight
      .selectAll(".highlighted-link")
      .data(cols.slice(0, -1))
      .join("path")
      .attr("class", "highlighted-link")
      .attr("stroke", accessor.color(data[rowIndex]))
      .attr("stroke-width", (col) => pathWidth(accessor[col](data[rowIndex])))
      .attr("d", (col, colIndex, links) => {
        const padding =
          colIndex === links.length - 1
            ? 0
            : pathWidth(accessor[cols[colIndex + 1]](data[rowIndex])) / 2;
        return linkGenerator([colIndex, rowIndex], padding);
      });
    gHighlight
      .selectAll(".probability")
      .data(cols.slice(0, -1))
      .join("text")
      .attr("class", "probability")
      .attr("text-anchor", "middle")
      .classed(
        "win",
        (col, colIndex, probabilities) => colIndex === probabilities.length - 1
      )
      .attr("x", (col, colIndex) => xLink(colIndex + 1) + colWidth / 2)
      .attr("y", (col, colIndex) => yLink([colIndex + 1, rowIndex]))
      .attr("transform", (col, colIndex, probabilities) => {
        let yOffset;
        if (colIndex === probabilities.length - 1) {
          yOffset = -logoHeight / 2 - logoMargin.y - 12;
        } else {
          yOffset = -pathWidth(accessor[col](data[rowIndex])) / 2 - 6;
        }
        return `translate(0,${yOffset})`;
      })
      .text((col) => {
        const probability = accessor[col](data[rowIndex]);
        if (probability > 0 && probability < 0.01) {
          return "<1%";
        } else if (probability > 0.99 && probability < 1) {
          return ">99%";
        } else {
          return d3.format(".0%")(probability);
        }
        });
  }

  //Maybe add part to just display text if container width too small
  function resize() {
    const containerWidth = el.getBoundingClientRect().width;
    svg.style("display", containerWidth < svgWidth ? "none" : "block");
  }
  window.addEventListener("resize", resize);
  resize();
}
