import React from "react";
import {Link} from "react-router-dom"

const ComparePane = (props) => {
    return (
        <>
            <div className="compare-panel" style={{transition: "all .2s",}}>
                <ul className="compare-panel-thumbs">
                    {props &&
                    <>
                        <li>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokeCompare[0].id}.png`} alt={props.pokeCompare[0].name} loading="lazy" />
                        </li>
                        <li>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokeCompare[0].id}.png`} alt={props.pokeCompare[0].name}  loading="lazy" />
                        </li>
                    </>
                    }
                    
                </ul>
                {props.pokeCompare.length >1 &&
                    <>
                <Link className="button button-cta  " to={`/compare-pokemon/${props.pokeCompare[0].name}/${props.pokeCompare[1].name}`}>
                    <span>Compare</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-arrow-right">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
                </>
                }
            </div>
        </>
    )
}

export default ComparePane;