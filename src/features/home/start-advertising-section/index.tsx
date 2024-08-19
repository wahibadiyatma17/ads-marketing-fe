import { Input, Select } from 'antd';
import { FC } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import db from '@/lib/firestore';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInput = {
  fullname: string;
  email: string;
  businessEntityName: string;
  budget: string;
};

const StartAdvertisingSection: FC = () => {
  const { handleSubmit, setValue, reset } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if (!data.fullname && !data.email && !data.budget && !data.businessEntityName)
      return toast.error('Form can not be empty');
    if (!data.fullname) return toast.error('Fullname can not be empty');
    if (!data.email) return toast.error('Email can not be empty');
    if (!data.businessEntityName) return toast.error('Business/entity name can not be empty');
    if (!data.budget) return toast.error('Advertising Budget can not be empty');

    try {
      const docRef = await addDoc(collection(db, 'advertise-form'), {
        fullname: data.fullname,
        email: data.email,
        businessEntityName: data.businessEntityName,
        budget: data.budget,
      });
      toast.success('Message sent!');
      reset();
    } catch (e) {
      console.log('wahib e', e);
      toast.error('Server Error');
    }
  };

  return (
    <section className="bg-[#EDEFF7]" id="start-advertise-now">
      <div className="w-full py-12 md:py-24 lg:py-32 bg-[#EDEFF7] flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]">
                Start Advertising Now
              </h2>
              <p className="max-w-[900px] text-black text-base md:text-lg lg:text-xl">
                Send us a message, and we&apos;ll get back to you soon! InsyaAllah
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg space-y-4">
              <form className="grid gap-4">
                <Input
                  placeholder="Fullname"
                  size={'large'}
                  onChange={(e) => setValue('fullname', e.target.value)}
                />
                <Input
                  placeholder="Email"
                  size={'large'}
                  onChange={(e) => setValue('email', e.target.value)}
                />
                <Input
                  placeholder="Business/Entity Name"
                  size={'large'}
                  onChange={(e) => setValue('businessEntityName', e.target.value)}
                />

                <StyledSelect
                  size={'large'}
                  style={{ width: '100%' }}
                  placeholder={'Advertising Budget (USD)'}
                  allowClear
                  onChange={(e) => setValue('budget', e as string)}
                  options={[
                    { value: '<100', label: '<100' },
                    { value: '100-500', label: '100-500' },
                    { value: '500-1000', label: '500-1000' },
                    { value: '1000-5000', label: '1000-5000' },
                    { value: '5000-10000', label: '5000-10000' },
                    { value: '>10000', label: '>10000' },
                  ]}
                />

                <div
                  className="w-full bg-[#022739] text-white py-2 rounded-lg cursor-pointer text-center"
                  onClick={handleSubmit(onSubmit)}
                >
                  Send
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartAdvertisingSection;

const StyledSelect = styled(Select)`
  .ant-select-selection-placeholder {
    flex: none;
  }
`;
