import React from 'react';

const Coin = ({name, image, symbol, price, volume}) => {
	//console.log(`images` + image);
	return (
		<div className='coin-container'>
			<div className='coin-row'>
				<img src={image} alt='crypto' />
				<div className='coin'>
					<h1>{name}</h1>
					<p className='coint-symbol'>{symbol}</p>
				</div>
				<div className='con-data'>
					<p className='coin-price'>${price}</p>
					<p className='coin-volume'>${volume.toLocaleString()}</p>
				</div>
			</div>
		</div>
	);
};

export default Coin;
