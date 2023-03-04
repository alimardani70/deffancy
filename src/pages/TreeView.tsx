import React, { useEffect, useState } from "react";
import Input from "components/basic/Input";
import { height } from "utils/depth";
import Circle from "components/basic/Circle";
import Level from "components/basic/Level";
import Container from "components/layouts/Container";
import Row from "components/layouts/Row";
import Col from "components/layouts/Col";
type propsType = {};
const TreeView: React.FC<propsType> = () => {
  const [elements, setElements] = useState<string[]>([]);
  const [nodes, setNodes] = useState<any[]>([]);

  const onChangeHandler = (element: string) => {
    if (element.length > 0) {
      let tempArray = element.split(" ");
      let tempNodes: any[] = [];
      tempArray.map((element: string) => {
        if (element.length > 0) tempNodes.push(element);
      });
      setElements(tempNodes);
    }
  };

  var tree = "";
  useEffect(() => {
    let maxHeight = height(elements.length);
    var indents: any = [];
    for (var i = 1; i <= maxHeight; i++) {
      indents.push(
        <Level key={`level-${i}`}>{levelNodes(i, maxHeight)}</Level>
      );
    }
    setNodes(indents);
  }, [elements]);

  const levelNodes = (level: number, levels: number): any[] => {
    let nodes = [];
    for (let j = Math.pow(2, level - 1); j < Math.pow(2, level); j++) {
      if (j <= elements.length) nodes.push(<Circle>{elements[j - 1]}</Circle>);
      else
        nodes.push(
          <div className="grow">
            <div className="w-10 h-10 "> </div>
          </div>
        );
    }
    return nodes;
  };
  return (
    <Container>
      <Row>
        <Col cols={{ sx: 12 }} className="mt-6">
          <Input
            initialValue=""
            id="input1"
            label="nodes"
            onChange={onChangeHandler}
          />
        </Col>
      </Row>
      <Row>
        <Col cols={{ sx: 12 }} className="mt-6">
          <div id="showTree">{nodes}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default TreeView;
