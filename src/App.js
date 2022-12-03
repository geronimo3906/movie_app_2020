import React from 'react';
import axios from 'axios';

class App extends React.Component {

  state = {
    isLoading: true,
    movies:[],
  };

  getMovies = async () => {
    const { data: {data: {movies},},} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({movies, isLoading:false});
    //this.setState({movies:movies});
    //const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')
    //console.log(movies.data.data.movies)
  }

  componentDidMount(){
      
    //영화 데이터 로딩:
    //axios.get('https://yts-proxy.now.sh/list_movies.json')
    this.getMovies();
    // console.log('============================ componentDisMount')
    // setTimeout(() => {this.setState({ isLoading: false})}, 6000)
  }

  render() {
    //console.log('============================ render')
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }  
}

//   constructor(props){
//     super(props)
//     console.log('hello')
//   }
  
//   componentDidMount() {
//     console.log('component rendered')
//   }

//   componentDidUpdate() {
//     console.log('I just updated')
//   }

//   componentWillUnmount() {
//     console.log('Goodbye, cruel world')
//   }

//   state = {
//     count: 0,
//   }
  
//   add = () => {
//     this.setState(current =>({count: current.count + 1}));
//     //this.setState({count: this.state.count + 1});
//     //this.setState({count: 1})
//     //this.state.count = 1;
//     //console.log('add')
//   };

//   minus = () => {
//     this.setState(current =>({count: current.count - 1}));
//     //this.setState({count: this.state.count - 1});
//     //this.setState({count: -1})
//     //this.state.count = -1;
//     //console.log('minus')
//   };

//   render() {
//     console.log("I'm rendering")
//     return (
//       <div>
//         <h1>The number is : {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )  
//   }      
// }

// import PropTypes from 'prop-types';

// function Food({ name, picture, rating }){
//   return (
//     <div>
//       <h1>I like {name}</h1>
//       <h4>{rating}/5.0</h4>
//       <img src={picture} alt={name} />
//     </div>

//   );
// }

// const foodILike = [
//   { id: 1,
//     name: 'Kimchi',
//     image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
//     rating: 5
//   },
//   {
//     id: 2,
//     name: 'Samgyeopsal',
//     image:
//       'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
//     rating: 4.9
//    },
//   {
//     id: 3,
//     name: 'Bibimbap',
//     image:
//       'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb',
//     rating: 4.8
//   },
//   {
//     id: 4,
//     name: 'Doncasu',
//     image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
//     rating:4.1
//   },
//   {
//     id: 5,
//     name: 'Kimbap',
//     image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
//     //rating:4.9
//   },  
// ];

//function renderFood(dish){
//  return <Food name={dish.name} picture={dish.image} />;
//}
//const renderFood = dish => <Food name={dish.name} picture={dish.image} />;

// function App() {
//   //console.log(foodILike.map(renderFood));
//   return ( 
//     <div>
//       {foodILike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))}
//     </div>
//  );  
// }

// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   picture: PropTypes.string.isRequired,
//   rating: PropTypes.number//.isRequired
// };

export default App;
