import { Story } from "@storybook/react/types-6-0";
import Hello, { HelloProps } from "./Hello";
declare const meta: {
    title: string;
    component: typeof Hello;
    argTypes: {
        text: {
            control: string;
        };
    };
};
export default meta;
export declare const HelloDft: Story<HelloProps>;
//# sourceMappingURL=Hello.stories.d.ts.map