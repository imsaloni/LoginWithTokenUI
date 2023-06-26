
import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-d3app',
  templateUrl: './d3app.component.html',
  styleUrls: ['./d3app.component.css']
})

export class D3appComponent implements OnInit {

    private simulation: any; // Declare simulation variable as a class member

    constructor(private dataService: ApiService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    // ngOnInit() {
    //   this.renderVisualization();
    // }

    // renderVisualization() {
    //   const width = 800; // Set your desired width
    //   const height = 600; // Set your desired height

    //   const svg = d3.select('#network-graph')
    //     .append('svg')
    //     .attr('width', width)
    //     .attr('height', height);

    //   this.dataService.getApplicationData().subscribe(applications => {
    //     const links = applications.map(app => ({
    //       source: app.Application_Name,
    //       target: app.Serverinfo,
    //       port: app.Portinfo
    //     }));

    //     const nodesSet = new Set();
    //     links.forEach(link => {
    //       nodesSet.add(link.source);
    //       nodesSet.add(link.target);
    //     });
    //     const nodes = Array.from(nodesSet).map((node, i) => ({ id: node, x: i * 100, y: i * 100 }));


    //     this.simulation = d3.forceSimulation(nodes)
    //     .force('link', d3.forceLink(links).id((d: any) => d))
    //     .force('charge', d3.forceManyBody().strength(-200))
    //     .force('center', d3.forceCenter(width / 2, height / 2));


    //     const link = svg.selectAll('line')
    //     .data(links)
    //     .enter()
    //     .append('line')
    //     .attr('stroke', 'steelblue')
    //     .attr('stroke-width', 2);

    //     const node = svg.selectAll('.node')
    //     .data(nodes)
    //     .enter()
    //     .append('circle')
    //     .attr('class', 'node')
    //     .attr('r', 10)
    //     .attr('fill', (d: any) => (d.startsWith('App')) ? 'orange' : 'steelblue')
    //     .call(
    //       d3.drag()
    //         .on('start', (event, d) => this.dragstarted(event, d))
    //         .on('drag', (event, d) => this.dragged(event, d))
    //         .on('end', (event, d) => this.dragended(event, d))
    //     );
    //     this.simulation.on('tick', () => {
    //       link
    //         .attr('x1', (d: any) => d.source.x)
    //         .attr('y1', (d: any) => d.source.y)
    //         .attr('x2', (d: any) => d.target.x)
    //         .attr('y2', (d: any) => d.target.y);

    //       node
    //         .attr('cx', (d: any) => d.x)
    //         .attr('cy', (d: any) => d.y);
    //     });
    //   });
    // }

    // dragstarted(event: any, d: any) {
    //   if (!event.active) this.simulation.alphaTarget(0.3).restart();
    //   d.fx = d.x;
    //   d.fy = d.y;
    // }

    // dragged(event: any, d: any) {
    //   d.fx = event.x;
    //   d.fy = event.y;
    // }

    // dragended(event: any, d: any) {
    //   if (!event.active) this.simulation.alphaTarget(0);
    //   d.fx = null;
    //   d.fy = null;
    // }
  }
