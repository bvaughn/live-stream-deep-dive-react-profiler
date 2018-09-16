export function convertData(rootNode) {
  const returnArray = [];
  crawl(rootNode, returnArray, 0, rootNode.value, 0);
  return returnArray;
}

function crawl(node, returnArray, depth, maxValue, parentOffset) {
  const convertedNode = {
    name: node.name,
    width: node.value / maxValue,
    offset: parentOffset,
    color: COLORS[Math.floor((node.value / maxValue) * (COLORS.length - 1))]
  };

  if (returnArray.length === depth) {
    returnArray.push([convertedNode]);
  } else {
    returnArray[depth].push(convertedNode);
  }

  let offset = parentOffset;

  if (Array.isArray(node.children)) {
    node.children.forEach(child => {
      const convertedChild = crawl(
        child,
        returnArray,
        depth + 1,
        maxValue,
        offset
      );
      offset += convertedChild.width;
    });
  }

  return convertedNode;
}

const COLORS = [
  "#37afa9",
  "#72b299",
  "#97b488",
  "#b5b777",
  "#cfb965",
  "#e7bb50",
  "#febc38"
];
