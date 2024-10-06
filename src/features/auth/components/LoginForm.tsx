import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Divider from '@/components/divider';
import { useNavigate } from 'react-router-dom';
import { formSchema } from '../types/authTypes';
import { z } from 'zod';

const LoginForm = () => {
  const [error, setError] = useState('');
  const { loginUser } = useAuth();

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
    const response = loginUser(username, password);
    if (response.error) {
      setError(response.msg);
    }
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
          Sign In
        </Button>
        <Divider text="OR" />
        <Button
          onClick={() => navigate('/auth/register')}
          variant="outline"
          className="w-full border-2"
          size="lg"
        >
          Register
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
