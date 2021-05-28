import { shallowMount } from '@vue/test-utils';
import InputRadio from './InputRadio';

describe('InputRadio', () => {
  it('should display value', async () => {
    const value = true;
    const wrapper = shallowMount(InputRadio, {
      propsData: {
        value,
      },
    });

    await wrapper.vm.$nextTick();
    const radio = wrapper.findComponent({ name: 'InputRadio' });

    expect(radio.props('value')).toEqual(value);
  });
});
