import '../../public/sass/pages/home.scss';

export default async function Home() {
 const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/users`,
  {
   cache: 'no-store',
  }
 );

 const health = await response.json();

 return <div className='title'>{JSON.stringify(health)}</div>;
}
