const getPlaces = () => {
  return fetch('http://localhost:4000/api/places/getAll').then(data => {
    return data.json();
  }).catch(console.log);
}

const getPlace = slug => {
  return fetch(`http://localhost:4000/api/places/getOne/${slug}`).then(data => {
    return data.json();
  }).catch(console.log);
}

export { getPlaces, getPlace };

export default {
  places: [
    {imageUrl: '/place-1.jpg',address:'Av. Faro #2485', title:'La gloria', description:'Descripcion del lugar Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit perspiciatis praesentium deserunt, maiores quis omnis molestias facere voluptate sunt neque asperiores odit nesciunt labore iste illum eius dignissimos voluptates?'},
    {imageUrl: '/place-2.jpg',address:'Mariano Otero #2485', title:'Bendita pizza', description:'Descripcion del lugar Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit perspiciatis praesentium deserunt, maiores quis omnis molestias facere voluptate sunt neque asperiores odit nesciunt labore iste illum eius dignissimos voluptates?'},
    {imageUrl: '/place-3.jpg',address:'Manuel Clouthier #2485', title:'Giardinos', description:'Descripcion del lugar Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore suscipit perspiciatis praesentium deserunt, maiores quis omnis molestias facere voluptate sunt neque asperiores odit nesciunt labore iste illum eius dignissimos voluptates?'},
  ]
}
