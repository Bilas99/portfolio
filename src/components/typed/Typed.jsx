import { ReactTyped } from "react-typed";

const Typed = ({data}) => (
   <div>
      <ReactTyped
         strings={data}
         typeSpeed={90}
         backSpeed={80}
         loop
      />
   </div>
);

export default Typed;