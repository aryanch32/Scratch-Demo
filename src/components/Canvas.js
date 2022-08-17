import React from 'react';
import PropTypes, { func } from 'prop-types';


// const Canvas = ({ draw, height, width }) => { // CHANGED
//     const canvas = React.useRef();
//     React.useEffect(() => {
//         const context = canvas.current.getContext('2d');
//         draw(context);
//     });

export default function Canvas(props) {

    let canvas = React.useRef();
    React.useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        console.log("width", canvas.width);
        let x = 100;
        let y = 100;
        draw(ctx, x, y);
        // props.move(ctx);
    }, []);

    // React.useEffect(() => {
    //     const ctx = canvas.current.getContext('2d');
    //     props.move(ctx);
    // }, [props.count]);

    // let x = canvas.width / 2;
    // console.log("width",canvas.width);
    // let y = canvas.height - 30;



    let dx = 200;
    let dy = 200;

    const draw = (ctx, x, y) => {
        // console.log("x", x)
        // ctx.beginPath();
        // ctx.arc(x, y, 10, 0, Math.PI * 2);
        // ctx.fillStyle = "#0095DD";
        // ctx.fill();
        // ctx.closePath();
        // x += dx;
        // y += dy;

        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, x, y);
        }
        img.src = 'cat.svg';

        x += dx;
        console.log("x", x)

        y += dy;
    }

    // setInterval(draw, 10);


    return (
        // <canvas
        //     // ref={canvas}
        //     width={width}   // CHANGED
        //     height={height}
        //     style={{ border: '1px solid #d3d3d3', backgroundColor: '#f1f1f1' }} // CHANGED
        // />
        <>
            <canvas ref={canvas} width="800" height="800" style={{ border: '1px solid #d3d3d3', backgroundColor: '#f1f1f1' }}></canvas>
            {/* <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
                draggable
                // onDragStart={(e) => onDragStart(e, "Motion1")}
                onClick={move()}>
                {"Move"}
                {"steps"}
            </div> */}
        </>
    )
}

// ADDED
// Canvas.propTypes = {
//     draw: PropTypes.func.isRequired,
//     height: PropTypes.number.isRequired, // ADDED
//     width: PropTypes.number.isRequired, // ADDED
// };

// export default Canvas;