import { SDNode, Widget } from "@comflowy/common/comfui-interfaces"
import { useAppStore } from "@comflowy/common/store"
import { NodeProps } from "reactflow";
import {shallow} from "zustand/shallow";
import NodeComponent from "./reactflow-node";

export function NodeContainer(props: NodeProps<{
  widget: Widget;
  value: SDNode;
}>): JSX.Element {
    const { progressBar, imagePreviews, onDuplicateNode, onNodesDelete } = useAppStore(
      (st) => ({
        progressBar: st.nodeInProgress?.id === props.id ? st.nodeInProgress.progress : undefined,
        imagePreviews: st.graph[props.id]?.images || [],
        onPropChange: st.onPropChange,
        onDuplicateNode: st.onDuplicateNode,
        onNodesDelete: st.onNodesDelete,
      }),
      shallow
    )
    if (imagePreviews.length > 0) {
      console.log("imagePreviews", imagePreviews, props)
    }
    return (
      <NodeComponent
        node={props}
        progressBar={progressBar}
        imagePreviews={imagePreviews}
        onDuplicateNode={onDuplicateNode}
        onNodesDelete={onNodesDelete}
      />
    )
  }