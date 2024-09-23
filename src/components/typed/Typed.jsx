import { ReactTyped } from "react-typed";

const Typed = ({data}) => (
   <div>
      <code>
         <ReactTyped
            strings={data}
            typeSpeed={90}
            backSpeed={80}
            loop
         />
      </code>
   </div>
);

export default Typed;