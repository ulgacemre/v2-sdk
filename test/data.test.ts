import { ChainId, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.OMCHAIN, '0xeDF2261051b20Ce673A836673F609e8cF3d55306') // DAI
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.OMCHAIN, '0xeDF2261051b20Ce673A836673F609e8cF3d55306') // DGD
    expect(token.decimals).toEqual(9)
  })
})
