import * as React from 'react'

import { RouteComponentProps } from '@reach/router'

interface IAppPropsHook  {
  img: string;
  title: string;
  company: string;
  status: string;
}

const Home: React.FC<RouteComponentProps> = () => {

const [edit, setEdit] = React.useState<boolean>(false);
   const [product, setProduct]=React.useState<IAppPropsHook>({
    img: 'https://upweek.ru/wp-content/uploads/2019/12/Warcraft_III_Reforged_Logo.png',
    title:'Warcraft III Reforged',
    company:'Blizzard',
    status: 'inProgress'
  });
    const statusList:Array<string>=['inProgress', 'Beta', 'Selling'];
   const updateProduct = (field:string,value:string)=>{
    setProduct({...product, [field]:value})
  };

  return (
    <>
      <div className={'' + (edit ? ' widget' : '')}>
        <div className={'window'} onClick={()=>setEdit(!edit)}>
            <div className={'img'} style={{background: 'url('+product.img+') center/cover no-repeat'}}></div>
            <div>
                <h3 className={'title'}>{product.title}</h3>
                <h4 className={'company'}>{product.company}</h4>
                <p className={'status'}>{product.status}</p>
            </div>
        </div>
       {edit &&(
             <div className={'popover'}>
                <span>Title</span>
                <input 
                    type="text" 
                    value={product.title} 
                    onChange={e=> updateProduct ("title", e.target.value)} 
                />                    
                <span>Company</span>
                <input 
                    type="text"
                    value={product.company}
                    onChange={e=> updateProduct ("company", e.target.value)}
                    />
                <span>Status</span>
              	 <ul>
                    {statusList.map(status => 
                    <li className={product.status === status ? 'active' : ''} 
                        key={status} 
                        onClick= {()=> updateProduct( "status", status)}>
                        {status}
                    </li>)}
                </ul>
              </div>
        	)}
    	</div>
    </>
  )
}

export { Home }
