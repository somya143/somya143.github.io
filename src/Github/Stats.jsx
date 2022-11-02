import React from "react";
import "./Stats.css";


export const Stats = () => {

    return (
        <div className="statsBox">
            <h3>GitHub Stats</h3>
            <div>
            <div className="statsContainer">
                <div>
                    <a href="https://github.com/somya143">
                        <img align="left" src="https://github-readme-streak-stats.herokuapp.com/?user=somya143" />
                    </a>
                </div>
            </div>

            <div className="stats-3">
                <p align="center">
                <a href="https://github.com/somya143">
                        <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=somya143&bg_color=0D1117" alt="" />
                    </a>
                </p>
            </div>

            <div className="stats-2">
                <p align="center">
                    <a href="https://github.com/somya143/github-readme-stats">
                        <img alt="Somya Ranjan Singh Github Stats" 
                        src="https://github-readme-stats.vercel.app/api?username=somya143&show_icons=true&locale=en&theme=react&hide_border=true&bg_color=0D1117" 
                        />
                    </a>
                </p>
            </div>

            
            </div>
        </div>

    );
}
