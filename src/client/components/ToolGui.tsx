import * as Roact from "rbx-roact"
import { ToolButton } from "./ToolButton"
import Stamper from "../tools/Stamper"
import { Tool } from "../Tool"

export interface ToolGuiProps {

    tools: Array<Tool>

}

export class ToolGui extends Roact.Component {

    constructor(props: ToolGuiProps) {

        super(props as Object)

    }

    render() {

        const props = this.props as ToolGuiProps

        const buttons = new Array<Roact.Element>()

        props.tools.forEach((tool, index) => {

            let id = index + 1

            if (id <= 10) {

                if (id === 10) {

                    id = 0

                }

                const toolButton = <ToolButton tool={tool} id={id}></ToolButton>
                
                buttons.push(toolButton)

            }

        })

        const gui = <screengui Name="toolGui" ResetOnSpawn={false}>

            <frame BackgroundTransparency={1} Position={new UDim2(0, 0, 0.7, 0)} Size={new UDim2(1, 0, 0.3, 0)}>
            
                <uilistlayout SortOrder={Enum.SortOrder.LayoutOrder} Padding={new UDim(0, 0)} FillDirection={Enum.FillDirection.Horizontal} HorizontalAlignment={Enum.HorizontalAlignment.Center} VerticalAlignment={Enum.VerticalAlignment.Center}></uilistlayout>

                {buttons}

            </frame>
            
        </screengui>

        return gui

    }

    createToolButton(tool: Tool) {

        

    }

}