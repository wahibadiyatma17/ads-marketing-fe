import { Input, Select } from 'antd';
import { FC, useCallback } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';
import { collection, addDoc } from 'firebase/firestore';
import db from '@/lib/firestore';
import { useForm, SubmitHandler, FormProvider, Controller } from 'react-hook-form';
import moment from 'moment';
import { validateEmail } from '@/lib/utils';

type FormInput = {
  fullname: string;
  email: string;
  businessEntityName: string;
  budget: string;
};

const StartAdvertisingSection: FC = () => {
  const form = useForm<FormInput>();
  const onSubmit = form.handleSubmit(
    useCallback(async (data) => {
      const botToken = '7404845445:AAEjf6AZ0T_jbT2dymUF818Ow-amWgDQFrY';
      const chatId = '-4501363919';
      const currentDate = moment(new Date()).format('DD MMM YYYY');
      const message = `A new client has been registered with the following details:\n\Date: ${currentDate}\nName: ${data.fullname}\nEmail: ${data.email}\nBusiness/Entity Name: ${data.businessEntityName}\nBudget: ${data.budget}`;

      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message,
      )}`;

      try {
        await addDoc(collection(db, 'advertise-form'), {
          fullname: data.fullname,
          email: data.email,
          businessEntityName: data.businessEntityName,
          budget: data.budget,
          date: currentDate,
        });

        await fetch(url, {
          method: 'POST',
        });
        toast.success('Message sent!');
      } catch (e) {
        toast.error('Server Error');
      }
    }, []),
  );

  return (
    <section className="bg-[#EDEFF7]" id="start-advertise-now">
      <div className="w-full py-12 md:py-24 lg:py-32 bg-[#EDEFF7] flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]"
                style={{ fontFamily: "'Quattrocento', serif" }}
              >
                Start Advertising Now
              </h2>
              <p className="max-w-[900px] text-black text-base md:text-lg lg:text-xl">
                Send us a message, and we&apos;ll get back to you soon, InshaAllah!
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg space-y-4">
              <FormProvider {...form}>
                <form className="grid gap-4">
                  <Controller
                    control={form.control}
                    name={'fullname'}
                    rules={{
                      required: 'Full Name can not be empty',
                    }}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-1 items-start">
                        <Input
                          style={{
                            borderColor: fieldState.error ? '#F74A5C' : 'transparent',
                          }}
                          placeholder="Full Name*"
                          size={'large'}
                          onChange={(event) => field.onChange(event.target?.value)}
                        />
                        {fieldState.error && (
                          <p className="text-[#F74A5C] text-sm">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    control={form.control}
                    name={'email'}
                    rules={{ validate: validateEmail }}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-1 items-start">
                        <Input
                          style={{
                            borderColor: fieldState.error ? '#F74A5C' : 'transparent',
                          }}
                          placeholder="Email*"
                          size={'large'}
                          onChange={(event) => field.onChange(event.target?.value)}
                        />
                        {fieldState.error && (
                          <p className="text-[#F74A5C] text-sm">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    control={form.control}
                    name={'businessEntityName'}
                    rules={{
                      required: 'Business/Entity Name can not be empty',
                    }}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-1 items-start">
                        <Input
                          style={{
                            borderColor: fieldState.error ? '#F74A5C' : 'transparent',
                          }}
                          placeholder="Business/Entity Name*"
                          size={'large'}
                          onChange={(event) => field.onChange(event.target?.value)}
                        />
                        {fieldState.error && (
                          <p className="text-[#F74A5C] text-sm">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    control={form.control}
                    name={'budget'}
                    rules={{
                      required: 'Advertising Budget can not be empty',
                    }}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-1 items-start">
                        <StyledSelect
                          style={{
                            borderWidth: fieldState.error ? 1 : 0,
                            borderRadius: 10,
                            borderColor: fieldState.error ? '#F74A5C' : 'transparent',
                            width: '100%',
                          }}
                          size={'large'}
                          placeholder={'Advertising Budget (USD)*'}
                          allowClear
                          onChange={(e) => field.onChange(e)}
                          options={[
                            { value: '<100 USD', label: '<100 USD' },
                            { value: '100 USD - 500 USD', label: '100 USD - 500 USD' },
                            { value: '500 USD - 1000 USD', label: '500 USD - 1000 USD' },
                            { value: '1000 USD - 5000 USD', label: '1000 USD - 5000 USD' },
                            { value: '5000 USD - 10000 USD', label: '5000 USD - 10000 USD' },
                            { value: '>10000 USD', label: '>10000 USD' },
                          ]}
                        />
                        {fieldState.error && (
                          <p className="text-[#F74A5C] text-sm">{fieldState.error.message}</p>
                        )}
                      </div>
                    )}
                  />

                  <div
                    className="w-full bg-[#022739] text-white py-2 rounded-lg cursor-pointer text-center"
                    onClick={onSubmit}
                  >
                    Send
                  </div>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartAdvertisingSection;

const StyledSelect = styled(Select)`
  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    flex: none;
  }
`;
