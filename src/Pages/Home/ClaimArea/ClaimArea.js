import React from 'react';
 import './ClaimArea.css'

const ClaimArea = () => {
    return (
        <div className='claimArea mt-5'>
            <div className='container'>
                <h1 className='text-7xl text-white'>Claim Your Free Hideout!</h1>
                <p className='text-xl text-gray-400'>ALL MOOSE SOCIETY HOLDERS ARE ELIGIBLE TO CLAIM ONE FREE HIDEOUT!</p>
                <p className='text-xl  text-gray-400'>Mint Price: .005 ETH + Gas Mint Max: NO LIMIT</p>
                <div className='mt-3 w-72'>
                    <button class="btn btn-wide">Wide</button>
                    <h1 className='text-4xl text-center text-white'>or</h1>

                    <div className='flex space-x-4'>
                        <button class="btn btn-success">Success</button>
                        <div>
                            <select class="select select-info w-full max-w-xs">
                                <option disabled selected>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                            </select>
                        </div>
                    </div>

                    <div className='flex space-x-32 mt-5 text-white'>
                        <div className='border w-full'>
                            <span className='text-4xl'>1250</span>
                            <p className='text-xl'>Hero Hideouts</p>
                        </div>
                        <div className=''>
                            <span className='text-4xl'>1250</span>
                            <p className='text-xl'>Hero Hideouts</p>
                        </div>
                        <div className=''>
                            <span className='text-4xl'>1250</span>
                            <p className='text-xl'>Hero Hideouts</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default ClaimArea;