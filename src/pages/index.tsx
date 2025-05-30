import { Link } from "waku";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "#/components/ui/tooltip";

export default function Home() {
  return (
    <TooltipProvider>
      <div className="flex flex-col justify-center items-center h-screen gap-6">
        <h1 className="text-center text-2xl font-bold">
          no-forwarded-ref-waku-link-reproduction
        </h1>
        <p>
          Hover over each link - the `Link to Home` won't show a tooltip on
          hover, but the `Anchor to Home` will.
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/" className="text-primary">
                  Link to Home
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="/" className="text-primary">
                  Anchor to Home
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <p>
          Source code:{" "}
          <a href="https://github.com/hamlim/no-forwarded-ref-waku-link-reproduction">
            here
          </a>
        </p>
      </div>
    </TooltipProvider>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
