import TestEvents from './test-events';

@mixin(TestEvents)
export default class extends React.PureComponent{

  constructor(props){
    super(props);
    this.init();
    this.onMyEvent();
    this.triggerMyEvent();
  }

  onMyEvent(){
    this.on('testEvent',(inSender,args)=>{
      console.log('this is from my event!',args);
    })
  }


  triggerMyEvent(){
    setTimeout(()=>{
      this.fire('testEvent',{
        data:{
          name:'test',
          items:[1,2,3,4,5]
        }
      });
    },3000)
  }
  
  render(){
    return (
      <div className="test-comp">
        test comp view.

      </div>
    )
  }
}
