import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path fillRule="evenodd" d="M2.184 5.067c-.409.167-.684.634-.684 1.16v5.31c0 .535-.308 1.01-.677 1.399A2.99 2.99 0 0 0 0 15v6.75c0 .414.336.75.75.75h.286a.75.75 0 0 0 .671-.415L3 19.5h18l1.293 2.585a.75.75 0 0 0 .67.415h.287a.75.75 0 0 0 .75-.75V15c0-.8-.314-1.528-.825-2.066-.369-.389-.678-.865-.678-1.401l.003-5.305c0-.527-.275-.994-.684-1.16l-1.991-.813c-4.106-1.673-11.544-1.673-15.65 0l-1.991.812zM12 8.25a3.75 3.75 0 0 0-3.438 2.25H9.75a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.045A5.247 5.247 0 0 1 12 6.75a5.248 5.248 0 0 1 4.547 2.624.75.75 0 1 1-1.298.752 3.748 3.748 0 0 0-3.25-1.876zm2.25 5.25h1.188a3.751 3.751 0 0 1-6.687.374.75.75 0 1 0-1.298.752A5.248 5.248 0 0 0 12 17.25c1.91 0 3.582-1.02 4.5-2.545v1.045a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5z" clipRule="evenodd" /></svg>);