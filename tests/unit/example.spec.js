import { shallowMount } from '@vue/test-utils';
import Vuellect from '@/components/Vuellect.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Vuellect, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
