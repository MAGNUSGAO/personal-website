import {
  Timeline,
  Container,
  YearContent,
  BodyContent,
  Section,
  Description,
 } from 'vertical-timeline-component-react';
 import './Journey.css';

 import{Component} from 'react';
 
 const customTheme = {
  yearColor: '#405b73',
  lineColor: '#d0cdc4',
  dotColor: '#262626',
  borderDotColor: '#d0cdc4',
  titleColor: '#405b73',
  subtitleColor: '#bf9765',
  textColor: '#262626',
 };
 
 export class Journey extends Component {
  render() {
   return(
     <div className="Journey">
    <Timeline theme={customTheme} dateFormat='ll'>
     <Container>
      <YearContent startDate='2020/07/01' currentYear />
      <BodyContent>
       <Section title='Title'>
        <Description variant='subtitle' text='Subtitle' />
        <Description text='Description' />
        <Description text='Another description' />
       </Section>
 
       <Section title='Another title'>
        <Description text='Description' />
        <Description text='Another description' />
       </Section>
      </BodyContent>
     </Container>
    </Timeline>
    </div>
   );
  }
 }