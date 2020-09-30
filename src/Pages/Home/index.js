import React, { useEffect, useState } from 'react';

import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import DefaultPage from '../../components/Layout';
import CategoriesRepository from '../../repositories/categories';

function Home() {
	const [dadosIniciais, setDadosIniciais] = useState([]);

	useEffect(() => {
		CategoriesRepository.getAllVideos().then((categoriesWithVideos) => {
			setDadosIniciais(categoriesWithVideos);
		});
	}, []);

	return (
		<DefaultPage paddingAll={0}>

			{dadosIniciais.map((category, index) => {
				if (index === 0) {
					return (
						<div key={category.id}>
							<BannerMain
								videoTitle={dadosIniciais[0].videos[0].titulo}
								url={dadosIniciais[0].videos[0].url}
								videoDescription="Assista os melhores clássicos que fizeram parte da sua vida!"
							/>

							<Carousel ignoreFirstVideo category={dadosIniciais[0]} />

						</div>
					);
				}

				return (
					<Carousel key={category.id} category={category} />

				);
			})}

		</DefaultPage>
	);
}

export default Home;
