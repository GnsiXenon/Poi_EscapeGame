from http.server import HTTPServer, BaseHTTPRequestHandler
import os

class Serv(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        else:
            self.path = os.path.join('/', self.path)
        
        try:
            if self.path.endswith('.html') or self.path.endswith('.css') or self.path.endswith('.js'):
                file_to_open = open(self.path[1:]).read()
                self.send_response(200)
                
                if self.path.endswith('.css'):
                    self.send_header('Content-type', 'text/css')
                elif self.path.endswith('.js'):
                    self.send_header('Content-type', 'application/javascript')
                else:
                    self.send_header('Content-type', 'text/html')
            elif self.path.startswith('/img/'):
                img_path = self.path[1:]
                with open(img_path, 'rb') as img_file:
                    img_data = img_file.read()
                    self.send_response(200)
                    self.send_header('Content-type', 'image/jpeg')  # Adjust content type based on your image file format
                self.end_headers()
                self.wfile.write(img_data)
                return  # Return early to avoid writing the file again below
            else:
                raise Exception("Invalid file type")
        except FileNotFoundError:
            file_to_open = 'File not found'
            self.send_response(404)
        except:
            file_to_open = 'Error occurred'
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
        
        self.end_headers()
        self.wfile.write(bytes(file_to_open, 'utf-8'))


httpd = HTTPServer(('localhost', 8080), Serv)
httpd.serve_forever()
