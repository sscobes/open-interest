import React from "react";

type BannerProps = {
    banner: string
}

const Banner = (props: BannerProps) => {

  const [homeMessage, setMessage] = React.useState("");
  const message = "t_ool for viewing open interest across multiple exchanges, use 'help' for useful commands."; //not sure why but need the _ or else char is skipped
  const index =  React.useRef(0);

  React.useEffect(() => {
      function typing() {
          setMessage(prev => prev + message[index.current]);
          index.current++;
      }

      if(index.current < message.length - 1) {
          let addChar = setInterval(typing, 30)
          return () => clearInterval(addChar);
      }
  }, [homeMessage]);

    return(
        <div className="flex flex-col text-white font-mono my-4">
            <h1 className="whitespace-pre text-[10px]">
                {props.banner}
            </h1>
            <h2 className="ml-12 mt-8 text-sm">
                {homeMessage}
            </h2>
        </div>
    );
}

export default Banner;