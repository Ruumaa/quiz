import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRegister } from '../hooks/useAuth';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { formSchema } from '../types/authTypes';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import Divider from '@/components/divider';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const RegisterForm = () => {
  const [error, setError] = useState('');
  const { registerUser } = useRegister();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { username, password } = values;
    const response = registerUser(username, password);
    if (response.error) {
      setError(response.msg);
      return;
    }
    navigate('/auth/login');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="my-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <FormMessage>{error}</FormMessage>}
        <Button type="submit" className="w-full mt-4 " size="lg">
          Register
        </Button>
        <Divider text="OR" />
        <Button
          onClick={() => navigate('/auth/login')}
          variant="outline"
          className="w-full border-2"
          size="lg"
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
