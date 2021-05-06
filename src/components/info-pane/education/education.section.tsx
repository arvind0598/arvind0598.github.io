import {Box, Heading, Paragraph} from "grommet";
import {SectionProps} from "../../../utils/types";
import {CSSProperties} from "react";

const getParagraphStyles = (isDesktop: boolean): CSSProperties => ({
    lineHeight: isDesktop ? "2em" : "1.5em",
});

const EducationSection = ({ isDesktop }: SectionProps) => (
    <Box fill>
        <Heading level="1"> Where have I studied? </Heading>
        <Box width={isDesktop ? "80%" : "100%"}>
            <Paragraph style={getParagraphStyles(isDesktop)} fill>
                I graduated from Manipal Institute of Technology (Manipal) with a Bachelor's degree in Computers and Communication (GPA 8.63) and a minor in Big Data.
            </Paragraph>
            <Paragraph style={getParagraphStyles(isDesktop)} fill>
                As part of my time here, I was the Category Head for System Admin and Web Development for multiple college fests, leading a batch of 15-20 students.
            </Paragraph>
            <Paragraph style={getParagraphStyles(isDesktop)} fill>
                I also mentored, then served as General Secretary and Academic Head for Teach Code for Good. TCfG is a non-profit initiative to teach basic computer knowledge and programming to underprivileged children.
            </Paragraph>
            <Paragraph style={getParagraphStyles(isDesktop)} fill>
                I have also been an active participant in the photography and computer science clubs and the college football league.
            </Paragraph>
        </Box>
    </Box>
);

export default EducationSection;